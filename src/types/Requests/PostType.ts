export type PostType = {
    id: number | string;
    userId?: number;
    title?: string;
    body?: string;
}

export type CommentType = {
    postId?: number;
    id?: number;
    name: string;
    email?: string;
    body?: string;
};