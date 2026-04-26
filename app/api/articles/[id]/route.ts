import { NextRequest, NextResponse } from 'next/server';
import { UpdateArticleDto } from '@/app/utils/dtos';
import prisma from '@/app/utils/db';


/**
 *  @method  GET
 *  @route   ~/api/articles/:id
 *  @desc    Get Single Article By Id
 *  @access  public
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
      include: {
        comments: {
          include: {
            user: {
              select: {
                username: true,
              },
            },
          },
          orderBy: {
            createdAt: 'desc',
          },
        },
      },
    });

    if (!article) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(article, { status: 200 });
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
 *  @route   ~/api/articles/:id
 *  @desc    Update Article
 *  @access  public
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
    });

    if (!article) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 }
      );
    }

    const body = (await request.json()) as UpdateArticleDto;

    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(id) },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(updatedArticle, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
}

/**
 *  @method  DELETE
 *  @route   ~/api/articles/:id
 *  @desc    Delete Article
 *  @access  public
 */
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const article = await prisma.article.findUnique({
      where: { id: parseInt(id) },
      include: { comments: true },
    });

    if (!article) {
      return NextResponse.json(
        { message: 'article not found' },
        { status: 404 }
      );
    }

    await prisma.article.delete({ where: { id: parseInt(id) } });

    return NextResponse.json(
      { message: 'article deleted' },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'internal server error' },
      { status: 500 }
    );
  }
}