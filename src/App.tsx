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


import React, {Component} from "react";

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

class Form extends Component<any, any> {
// todo типизация событый
    hadleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        console.log(e.currentTarget)
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Submited")
    }
    handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
        console.log('Copied')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" name={"Text"} onCopy={this.handleCopy} onFocus={this.hadleFocus}/>
                    <button type={"submit"}>Submit</button>
                </label>
            </form>
        )
    }
}

const App = () => <Form/>

export default App
