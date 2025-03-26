import React from "react";

export default function Menu(props) {
    return (
        <div>
            <nav className="navbar navbar-inverse bg-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a href="#" className="navbar-brand">
                            <i className="fa fa-calendar-check-io"></i> Todo App
                        </a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><a href="#/todos">Tarefas</a></li>
                            <li><a href="#/about">Tarefas</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}