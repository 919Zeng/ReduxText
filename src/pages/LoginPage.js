class LoginPage extends Component {

    static navigationOptions = {    title: 'LoginPage',  };

    shouldComponentUpdate(nextProps, nextState) {

// 登录完成,切成功登录   

        if (nextProps.status === '登陆成功' && nextProps.isSuccess) {

            this.props.navigation.dispatch(resetAction)

            return false;

        }

        return true;

    }

    render() {

        const { login } = this.props;

        return(

            /*...components*/

        )

    }

    export default connect(

(state) => ({

    status: state.loginIn.status,

    isSuccess: state.loginIn.isSuccess,

    user: state.loginIn.user,

}),

(dispatch) => ({

    login: () => dispatch(loginAction.login()),

})

)(LoginPage)

