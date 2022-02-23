import React, { Component } from "react";
import axios from "axios";
import SignIn from "./authorization.js/signin";

export default class ChoreGenerator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            id: '',
            task: {},
            tasks: [],


        };
        this.renderUser = this.renderUser.bind(this);
        this.addChoreItems = this.addChoreItems.bind(this);
        this.returnChore = this.returnChore.bind(this);
        this.getChoreItems = this.getChoreItems.bind(this);
    }

    addChoreItems(event) {
        event.preventDefault();
        axios.get("https://chore-backend-gina.herokuapp.com/chore/add",
            {
                id: '',
                task: {},
                date: '',
                done: false


            },
        ).then(response => {
            if (response.status === 200) {

                console.log(response);
                alert("chores added")
            } else {
                this.setState({
                    err: " not working"
                });
                ;
            }

        }).catch(err => {
            console.log("an error has occured", err);
            alert("sorry not added")
            this.setState({
                err: "An error has occurred"
            });

        });
    }
    //returns all chores in the db
    getChoreItems(event) {
        event.preventDefault();

        axios.get("https://chore-backend-gina.herokuapp.com/chore/get",

        ).then(response => {
            if (response.status === 200) {
                this.setState({
                    tasks: response.data
                })
                console.log(response);

            } else {
                this.setState({
                    err: " not working"
                });
                ;
            }

        }).catch(err => {
            console.log("an error has occured", err);
            alert("sorry cannot get")
            this.setState({
                err: "An error has occurred"
            });

        });
        this.setState({task: tasks[randomTasks] })
    }


    componentDidMount() {

        let tasks = [

            {
                id: this.state.id,
                task: this.state.task
            }
        ]
    }



    // returns the one chore at a time
    returnChore() {


        let tasks = [

            {
                id: 1,
                task: 'clean bathroom'
            },
            {
                id: 2,
                task: 'vacuum and dust'
            },
            {
                id: 3,
                task: 'wash dishes'
            },
            {
                id: 4,
                task: 'sweep and mop'
            },
            {
                id: 5,
                task: 'clean kitchen'
            },
            {
                id: 6,
                task: 'wash and fold laundry'
            },
            {
                id: 7,
                task: 'clean bedroom'
            },
            {
                id: 8,
                task: 'wash car'
            },
            {
                id: 9,
                task: 'cleanout fridge'
            }

        ]


        var randomTasks = Math.floor(Math.random() * tasks.length);
        console.log(randomTasks)
        this.setState({ task: tasks[randomTasks] })

    }
    renderUser = (username) => {
        this.state({
            username: username
        });
        return this.renderUser;
    }
    render() {

        return (
            <div className="chore-wrapper">
                <div className="welcome-screen" >
                    <h1>Welcome {sessionStorage.getItem('username')}!</h1>
                </div> 
                <div className="return-chore">
                    <p>Click below to return a random chore, or you can get all the chores</p>
                <div className="button">
                    <button onClick={this.returnChore}>Get My Chore</button>
                </div>
                    <div className="task-detail">
                    <h1> Your Task Is: {this.state.task.task}</h1>
                </div>
              <div className="button">
                        <button onClick={this.getChoreItems}>Show Me All Chores</button>
                        </div>
                <div className="task-detail">
                    {this.state.task ? (
                        <div>
                            {this.state.tasks.map(task => (
                                <div key={task.id}>
                                    <h2>{task.task}</h2>
                                </div>
                            ))}

                        </div>
                    ) : (
                        <div>DIDNT WORK</div>
                    )}
                    </div>
                </div>
            </div>
        )
    }

}









                {/* <button onClick={this.addChoreItems}>ADD THESE CHORES</button> */}
{/* <p>All CHORES:{this.state.tasks.task} </p> */ }

// axios.post("https://chore-backend-gina.herokuapp.com/chore/add").then(response => {

// axios.get("https://chore-backend-gina.herokuapp.com/chore").then(response => { 
//     
