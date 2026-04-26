import { Article, Comment, User } from '@/app/generated/prisma' ;

// export type Article = {
//   id:number,
//   userId:number,
//   title:string,
//   body:string
// }


export type JWTPayload = {
    id: number;
    isAdmin: boolean;
    username: string;
}

export type CommentWithUser = Comment & { user: User };

export type SingleArticle = Article & { comments: CommentWithUser[] };