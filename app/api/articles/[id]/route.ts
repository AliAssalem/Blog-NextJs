import prisma from '@/app/utils/db';
import { UpdateArticleDto } from '@/app/utils/dtos';
import { verifyToken } from '@/app/utils/verifyToken';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
    params: Promise<{ id: string }>;
}

/**
 *  @method  GET
 *  @route   ~/api/articles/:id
 *  @desc    Get Single Article By Id
 *  @access  public
 */
export async function GET(request: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const articleId = parseInt(id);

        const article = await prisma.article.findUnique({
            where: { id: articleId },
            include: {
                comments: {
                    include: {
                        user: {
                            select: {
                                username: true,
                            }
                        }
                    },
                    orderBy: {
                        createdAt: 'desc'
                    }
                }
            }
        });

        if (!article) {
            return NextResponse.json({ message: 'article not found' }, { status: 404 });
        }

        return NextResponse.json(article, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        );
    }
}


/**
 *  @method  PUT
 *  @route   ~/api/articles/:id
 *  @desc    Update Article
 *  @access  private (only admin can update article)
 */
export async function PUT(request: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const articleId = parseInt(id);

        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: 'only admin, access denied' },
                { status: 403 }
            )
        }

        const article = await prisma.article.findUnique({
            where: { id: articleId }
        });

        if (!article) {
            return NextResponse.json({ message: 'article not found' }, { status: 404 });
        }

        const body = (await request.json()) as UpdateArticleDto;
        const updatedArticle = await prisma.article.update({
            where: { id: articleId },
            data: {
                title: body.title,
                description: body.description
            }
        });

        return NextResponse.json(updatedArticle, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        );
    }
}

/**
 *  @method  DELETE
 *  @route   ~/api/articles/:id
 *  @desc    Delete Article
 *  @access  private (only admin can delete article)
 */
export async function DELETE(request: NextRequest, { params }: Props) {
    try {
        const { id } = await params;
        const articleId = parseInt(id);

        const user = verifyToken(request);
        if (user === null || user.isAdmin === false) {
            return NextResponse.json(
                { message: 'only admin, access denied' },
                { status: 403 }
            )
        }

        const article = await prisma.article.findUnique({
            where: { id: articleId },
            include: { comments: true }
        });
        if (!article) {
            return NextResponse.json({ message: 'article not found' }, { status: 404 });
        }

        // deleting the article
        await prisma.article.delete({ where: { id: articleId } });

        return NextResponse.json({ message: 'article deleted' }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            { message: "internal server error" },
            { status: 500 }
        );
    }
}
