const SAMPLE_POSTS = [
    {
        pid: '1',
        creator: '1',
    },
    {
        pid: '2',
        name: '2',
    },
]

export const getPostByPid = async (pid) => {
    return SAMPLE_POSTS.find(post => post.pid === pid);
}