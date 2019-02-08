import { HashRouter as Router, Switch, //匹配第一个符合的路由 就停止匹配
    Route, // 路由组件
    Redirect //重定向组件
}from "react-router-dom"
import App from "../App"
import React from "react"
import Detail from "../views/Detail"
import Login from "../views/Login"
import one from "../views/Tab/one"
import two from "../views/Tab/two"
import three from "../views/Tab/three"
import four from "../views/Tab/four"
import store from "../store"
import { Provider } from "react-redux"

const router = (
<Provider store={store}>
<Router>
		<App>
			<Switch>
				<Route path="/one" component={one} exact></Route>
				<Route path="/two" component={two} exact></Route>
				<Route path="/three" component={three} exact></Route>
				<Route path="four" component={four} exact></Route>
				<Route path="/Login" component={Login} exact></Route>
				<Route path="/Detail/:id" component={Detail} exact></Route>
			
	
				<Redirect from="*" to="/one"/>	
			</Switch>		

		</App>
	</Router>

</Provider>
)
export default router;