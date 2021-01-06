import React, { PureComponent } from "react"
import store from '../redux'
import { StoreContext } from './context';
export function connect(mapStateToProps, mapDispachToProp) {
   return function enhanceHOC(WrappedComponent) {
        class EnhanceComponent extends PureComponent {
           constructor(props,context) {
               super(props,context);
               this.state = {
                   storeState:mapStateToProps(context.getState()),
               }
           }
           componentDidMount() {
             this.unsubscribue = this.context.subscribe(() => {
                 console.log(this.state.storeState,'storeState')
                   this.setState({
                      storeState:mapStateToProps(this.context.getState()),
                   })
             })
           }
           componentWillUnmount() {
            this.unsubscribue();
           }
           render() {
               return <WrappedComponent {...this.props}
                                        {...mapStateToProps(this.context.getState())}
                                        {...mapDispachToProp(this.context.dispatch)}/>
           }
       }
       EnhanceComponent.contextType = StoreContext;

       return EnhanceComponent;
   }
}