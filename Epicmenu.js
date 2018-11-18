import React, {Component, Fragment} from 'react'



class EpicMenu extends Component {

    constructor() {
        super();

        this.state = {

            showForm: false
        }

    }

    

    showForm() {
        this.setState({
            showForm: !this.state.showForm
        });


    }


    render() {

       let Submenu = (props) => {
           return (<a>
               {props.submenu}
           </a>)
       }


      


        let searchForm = this.state.showForm ? (

                <form className="menu__search-form" method="POST">
                    <input className="menu__search-input" placeholder="Search"/>
                </form>

            ) : '';

        let linksMarkup = this.props.links.map((link, index,) => {

            let markup = link.active ? (



                <a className="menu__link menu__link--active" href={link.link}>{link.label}</a>

            ) : (
                <Fragment>


                <a className="menu__link" href={link.link}>{link.label}</a>
                <div className="submenu">
                

                </div>
                </Fragment>
            );



            return (

                <li key={index} className="menu__list-item">

                  {markup}


                </li>

            );

        });



        return (

            <nav className="menu">
                <h1 className="menu__logo">Logo</h1>

                <div className="menu__right">
                    <ul className="menu__list">

                        {linksMarkup}

                    </ul>
                   
                    <button onClick={this.showForm.bind(this)} className="menu__search-button"></button>

                    {searchForm}

                </div>
            </nav>

        );
    }

}




export default EpicMenu;
