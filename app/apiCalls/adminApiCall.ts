import { Comment } from "../generated/prisma";
import { DOMAIN } from "../utils/constants";


// Get all comments
export async function getAllComments(token: string): Promise<Comment[]> {
    const response = await fetch(`${DOMAIN}/api/comments`, {
        headers: {
            Cookie: `jwtToken=${token}`
        }
    });

    if (!response.ok) {
        throw new Error("Failed to fetch comments");
    }

    return response.json();
}