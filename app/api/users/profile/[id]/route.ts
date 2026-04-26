import { NextResponse, NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/app/utils/db';
import { UpdateUserDto } from '@/app/utils/dtos';
import { updateUserSchema } from '@/app/utils/validationSchemas';
import { verifyToken } from '@/app/utils/verifyToken';

/**
 *  @method  DELETE
 *  @route   ~/api/users/profile/:id
 *  @desc    Delete Profile
 *  @access  private (only user himself can delete his account)
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      include: { comments: true },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'user not found' },
        { status: 404 }
      );
    }

    const userFromToken = verifyToken(request);
    if (userFromToken !== null && userFromToken.id === user.id) {
      await prisma.user.delete({ where: { id: parseInt(id) } });
      return NextResponse.json(
        { message: 'your profile (account) has been deleted' },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: 'only user himself can delete his profile, forbidden' },
      { status: 403 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
}

/**
 *  @method  GET
 *  @route   ~/api/users/profile/:id
 *  @desc    Get Profile By Id
 *  @access  private (only user himself can get his account/profile)
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
      select: {
        id: true,
        email: true,
        username: true,
        createdAt: true,
        isAdmin: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'user not found' },
        { status: 404 }
      );
    }

    const userFromToken = verifyToken(request);
    if (userFromToken === null || userFromToken.id !== user.id) {
      return NextResponse.json(
        { message: 'you are not allowed, access denied' },
        { status: 403 }
      );
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
}

/**
 *  @method  PUT
 *  @route   ~/api/users/profile/:id
 *  @desc    Update Profile
 *  @access  private (only user himself can update his account/profile)
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });

    if (!user) {
      return NextResponse.json(
        { message: 'user not found' },
        { status: 404 }
      );
    }

    const userFromToken = verifyToken(request);
    if (userFromToken === null || userFromToken.id !== user.id) {
      return NextResponse.json(
        { message: 'you are not allowed, access denied' },
        { status: 403 }
      );
    }

    const body = (await request.json()) as UpdateUserDto;

    const validation = updateUserSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.issues[0].message },
        { status: 400 }
      );
    }

    if (body.password) {
      const salt = await bcrypt.genSalt(10);
      body.password = await bcrypt.hash(body.password, salt);
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(id) },
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });

    const { password, ...other } = updatedUser;
    return NextResponse.json({ ...other }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
}