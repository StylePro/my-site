const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';



let initialState = {
    users: [],
    pageSize: 5,
    currentPage: 1,
    totalUsersCount: 0,
    pagesCount: 10
};
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u=> {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u=> {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, ...action.totalUsersCount
            }
        }
        default:
            return state;
    }
}

export const follow = (userId)=> ({type: FOLLOW, userId});
export const unfollow = (userId)=> ({type: UNFOLLOW, userId});
export const setUsers = (users)=> ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount)=> ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersReducer;