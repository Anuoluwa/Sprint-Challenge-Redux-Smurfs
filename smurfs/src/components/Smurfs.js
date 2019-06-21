import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, deleteSmurf } from '../actions';
import Smurf from './Smurf';
export class Smurfs extends Component {

    componentDidMount(){
        this.props.fetchSmurfs();
    }

    handlerDelete = (event,id) =>{
        event.preventDefault();
        this.props.deleteSmurf(id);
    }
    render() {
        console.log('smurfs comp',this.props.fetchSmurfs())
        if(!this.props.fetchSmurfs) {
            return <div>Loading..... please wait</div>
        }
        return (
            <div>
                {
                    this.props.smurfsList.map(smurf => {
                        return <Smurf key={smurf.id} data={smurf} handlerDelete={this.handlerDelete}/>
                    })
                }
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurfsList: state.smurfs
    };
};

export default connect(mapStateToProps, {fetchSmurfs, deleteSmurf})(Smurfs);
