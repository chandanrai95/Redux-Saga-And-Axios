import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Image,} from 'react-native';
import Loading from 'react-loading';
import {
  shape, arrayOf, string, func, bool, number,
} from 'prop-types';
import { getPeople } from '../../actions' 

class PeopleList extends Component{
    state={
      people:[]
    } 
  componentDidMount() {
        const { fetchPeople } = this.props;
    
        fetchPeople();
      }
    
      showUsers() {
        const { people } = this.props;
    
        return people.map(person => (
          <View>
            {/* <Image
              src={`https://ui-avatars.com/api/?name=${person.name}`}
            /> */}
            <Text>{person.name}</Text>
          </View>
        ));
      }

      render(){
          const { hasLoadedPeople } =this.props;
          return(
              <View>
                  {this.showUsers()}
                  {!hasLoadedPeople?<ActivityIndicator size="small"/>:null}
              </View>
          )
      }     
}

// PeopleList.propTypes = {
//     people: arrayOf(
//       shape({
//         id: number,
//         name: string,
//       }),
//     ),
//     hasLoadedPeople: bool.isRequired,
//     fetchPeople: func.isRequired,
//   };
//   PeopleList.defaultProps = {
//     people: [],
//   };
  

  export const mapStateToProps = (state ) => ({
    people: state.list,
    hasLoadedPeople: state.hasLoadedPeople,
  });
  
  export const mapDispatchToProps = {
    fetchPeople: getPeople.request,
  };
  
  export default PeopleList;