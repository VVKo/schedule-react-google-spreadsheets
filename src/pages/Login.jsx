import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {Form, redirect} from "react-router-dom";
import {SubmitBtn} from "../components/index.js";
import {auth} from "../utils/Firebase.js";
import {toast} from "react-toastify";
import {loginUser} from "../store/slices/userSlice.js";
import {scheduleSlice} from "../store/slices/scheduleSlice.js";

export const action =
    (store) => async () => {



        const provider = new GoogleAuthProvider();

            try {
                const result = await signInWithPopup(auth, provider)
                const token = result.user.accessToken

                const {photoURL, displayName, email} = result.user
                // console.log('action',store, result, token, photoURL, displayName, email)

                const obj = {
                    token: token,
                    method: 'GET',
                    payload: {
                        xlsId: '',
                        action: 'roles',
                        values: {
                            func: 'INFO',
                            params: {
                                sheetName: 'USERS',
                            },
                        },
                    }}

                const resultAction = await store.dispatch(scheduleSlice.endpoints.getRoles.initiate(obj));
                // console.log('loader',resultAction.status)
                if (resultAction.status === 'fulfilled') {
                    // Data loading successful
                    const data = resultAction.data;
                    // console.log('loader', data)
                    // toast.dismiss()

                    if (data.data.role === 'guest'){
                        store.dispatch(loginUser({ role: data.data.role}));
                        toast.error('You are not staff ))')
                    } else {
                        store.dispatch(loginUser({token, photoURL, displayName, email, ...data.data}));
                        toast.success('Ви успішно авторизовані');
                    }
                    return redirect('/');
                } else {
                    console.log('loader ERROR')
                    return null
                }


            } catch (error) {
                const errorMessage =
                    error?.response?.data?.error?.message ||
                    'please double check your credentials';
                toast.error(errorMessage);
                return null;
            }

}
        //
        //     try {
        //         const response = await customFetch.post('/auth/local', data);
        //         store.dispatch(loginUser(response.data));
        //         toast.success('logged in successfully');
        //         return redirect('/');
        //     } catch (error) {
        //         const errorMessage =
        //             error?.response?.data?.error?.message ||
        //             'please double check your credentials';
        //         toast.error(errorMessage);
        //         return null;
        // };

const Login = () => {
    return (
        <section className='h-screen grid place-items-center'>
            <Form
                method='post'
                className='card w-96  p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
            >
                <h4 className='text-center text-3xl font-bold'>Login</h4>
                {/*<FormInput type='email' label='email' name='identifier'/>*/}
                {/*<FormInput type='password' label='password' name='password'/>*/}
                <div className='mt-4'>
                    <SubmitBtn text='login'/>
                </div>
                {/*<button*/}
                {/*    type='button'*/}
                {/*    className='btn btn-secondary btn-block'*/}
                {/*    onClick={loginAsGuestUser}*/}
                {/*>*/}
                {/*    guest user*/}
                {/*</button>*/}
                {/*<p className='text-center'>*/}
                {/*    Not a member yet?{' '}*/}
                {/*    <Link*/}
                {/*        to='/register'*/}
                {/*        className='ml-2 link link-hover link-primary capitalize'*/}
                {/*    >*/}
                {/*        register*/}
                {/*    </Link>*/}
                {/*</p>*/}
            </Form>
        </section>
    );
};

export default Login;
