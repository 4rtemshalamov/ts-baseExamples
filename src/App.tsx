// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// todo типизация функ компонентов
// type TitleProps = {
//   title: string,
//   test?: string,
//
// }
//
// const App = () => <Title title={'123'} test={'asd'}/>
//
// const Title = ({title, test}: TitleProps) => <h1>{title} {test}</h1>
//
//
// export default App;
// todo типизация функ компонентов

import React, {Component} from "react";
import ReactDOM from 'react-dom'
// type CounterState = {
//      count: number
// }
// todo типизация классовых компонетов
// type CounterProps = {
//      title?: string
// }
//
// class Counter extends Component <CounterProps, CounterState>{
//     constructor(props: CounterProps) {
//         super(props);
//
//         this.state = {
//             count: 0,
//     }
//   }
//
//   handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
//       console.log(`${e.clientX}, ${e.clientY}`)
//     this.setState(({count}) => ({
//       count: ++count
//     }))
//
//       // this.state.count = ++count
//   }
//
//   render() {
//         // this.props.title = ''
//
//     return (
//         <div>
//           <h1>{this.state.count} {this.props.title}</h1>
//           <button onClick={this.handleClick}>+1</button>
//             <a href="#" onClick={this.handleClick}>Link</a>
//         </div>
//     )
//   }
// }

// todo типизация классовых компонетов

// class Form extends Component<any, any> {
// // todo типизация событый
//     hadleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
//         console.log(e.currentTarget)
//     }
//
//     handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//         console.log("Submited")
//     }
//     handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
//         console.log('Copied')
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     <input type="text" name={"Text"} onCopy={this.handleCopy} onFocus={this.hadleFocus}/>
//                     <button type={"submit"}>Submit</button>
//                 </label>
//             </form>
//         )
//     }
// }

// // todo типизация событый

// todo типизация элементов
// type Position = {
//     id: string,
//     value: string,
//     title: string
// }
//
// type FormState = {
//     inputText: string,
//     textareaText: string,
//     selectText: string,
//     showData: {
//         name: string,
//         text: string,
//         position: string,
//     }
// }
//
// const POSITIONS: Array<Position> = [
//     {
//         id: 'df',
//         value: "FR Devep",
//         title: 'FR Devep'
//     },
//     {
//         id: 'bc',
//         value: "BC Devep",
//         title: 'BC Devep'
//     }
// ]
//
// const DEFAULT_SELECT_VALUE:string = POSITIONS[0].value
// const styles: React.CSSProperties = {display: 'block', marginBottom: '10px'}
//
// class Form extends Component<{}, FormState> {
//     state = {
//         inputText: '',
//         textareaText: '',
//         selectText: DEFAULT_SELECT_VALUE,
//         showData: {
//             name: '',
//             text: '',
//             position: '',
//         }
//     }
//
//     handleInputChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
//         const {target: {value: inputText}} = e
//         this.setState({inputText})
//     }
//
//     handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>):void => {
//         const {target: {value: textareaText}} = e
//         this.setState({textareaText})
//     }
//
//     handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>):void => {
//         const {target: {value: selectText}} = e
//         this.setState({selectText})
//     }
//
//     handleShow = (e: React.MouseEvent<HTMLButtonElement>):void => {
//         e.preventDefault()
//         const {inputText, textareaText, selectText} = this.state
//
//         this.setState({
//             inputText: '',
//             textareaText: '',
//             selectText: DEFAULT_SELECT_VALUE,
//             showData: {
//                 name: inputText,
//                 text: textareaText,
//                 position: selectText,
//             }
//         })
//     }
//
//     private rootRef = React.createRef<HTMLSelectElement>()
//
//     render() {
//         const {inputText, textareaText, selectText, showData} = this.state
//         const {name, text, position} = showData
//
//
//         return (
//             <>
//                 <form>
//                     <label style={styles}>
//                         Name:
//                         <input type="text"
//                                value={inputText}
//                                onChange={this.handleInputChange}
//                         />
//                     </label>
//
//                     <label style={styles}>
//                         Text:
//                         <textarea
//                             value={textareaText}
//                             onChange={this.handleTextareaChange}
//                         >
//                         </textarea>
//                     </label>
//                     <select
//                     style={styles}
//                     value={selectText}
//                     onChange={this.handleSelectChange}
//                     ref={this.rootRef}
//                     >
//                         {POSITIONS.map(({id, value, title}) => (
//                             <option
//                             key={id}
//                             value={value}
//                             >{title}</option>
//                         ))}
//                     </select>
//
//                     <button onClick={this.handleShow}>Show data</button>
//                 </form>
//             </>
//         )
//     }
// }
// todo типизация элементов


// // todo типизация портала
// type PortalProps = {
//     children: React.ReactNode
// }
//
// class Portal extends Component<PortalProps> {
//     private el: HTMLDivElement = document.createElement('div')
//
//     public componentDidMount():void {
//         document.body.appendChild(this.el)
//     }
//
//     public componentWillUnmount():void {
//         document.body.removeChild(this.el)
//     }
//
//     public render(): React.ReactElement<PortalProps> {
//         return ReactDOM.createPortal(this.props.children, this.el)
//     }
// }
//
// class MyComponent extends Component<{ }, {count: number}> {
//     state = {
//         count: 0
//     }
// }
//
// // todo типизация портала
interface IContext {
    isAuth: boolean,
    toggleAuth: () => void
}

const AuthContext = React.createContext<IContext>({
    isAuth: false,
    toggleAuth: () => {
    }
})

class Login extends Component {
    static contextType = AuthContext

    render() {
        const {toggleAuth, isAuth} = this.context

        return (
            <button onClick={toggleAuth}>
                {!isAuth ? 'Login' : 'Logout'}
            </button>
        )
    }
}

const Profile:React.FC = () => (
    <AuthContext.Consumer>
        {({isAuth}) => (
            <h1>{!isAuth ? 'Please log in' : "You are logged in"}</h1>
        )}
    </AuthContext.Consumer>
)

class Context extends Component<{}, { isAuth: Boolean }> {
    readonly state = {
        isAuth: false
    }

    toggleAuth = () => {
        this.setState(({isAuth}) => ({
            isAuth: !isAuth
        }))
    }

    render() {
        const {isAuth} = this.state
        const context: IContext = {isAuth, toggleAuth: this.toggleAuth}
        return (
            <AuthContext.Provider value={context}>
                <Login/>
                <Profile/>
            </AuthContext.Provider>
        )
    }
}

const App = () => <Context/>

export default App
