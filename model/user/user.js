const SAMPLE_USERS = [
    {
        uid: '1',
        name: 'John',
        username: 'john123',
        password: '123456',
    },
    {
        uid: '2',
        name: 'Jane',
        username: 'jane456',
        password: '123456',
    },
]

export const getUserByUid = async (uid) => {
    return SAMPLE_USERS.find(user => user.uid === uid);
}