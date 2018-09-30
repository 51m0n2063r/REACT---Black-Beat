import React from 'react'
import { Menu, List, Dropdown, Button, Checkbox, Form, Header, Image, Modal } from 'semantic-ui-react'

import projects from '../../json/projects.json'

// import DB from '../../classes/DB.js';
// let DB = require('../../classes/DB.js');

class LoadModal extends Modal {

    state = {}

    // constructor(props) {

    //     super(props)

    //     this.state = {
    //         projects: projects.projects,
    //     }
    // }
    
    render () {


        return (

            <Modal trigger={<Dropdown.Item>Load</Dropdown.Item>}>
            {/* <Modal trigger={<MyCards key={this.props.element.id} element={this.props.element}/>}> */}
                <Modal.Header>Load a project</Modal.Header>
                {/* <Modal.Content image> */}
                <Modal.Content>
                    
                    {/* <Image wrapped size='medium' src='' alt='img' /> */}
                    <Modal.Description>
                        <List selection divided relaxed>

                            {this.props.projects.map(project => (
                                
                                <List.Item key={project.id} 
                                // as='a' 
                                // href='http://google.com' 
                                // target='_BLANK'
                                >
                                    <List.Icon name='github' size='larges' verticalAlign='middle' />
                                    <List.Content>
                                        <List.Header 
                                            // as='a'
                                        >{ project.id } // { project.title }</List.Header>
                                        <List.Description 
                                            // as='a'
                                        >{ project.owner }</List.Description>
                                    </List.Content>
                                </List.Item>

                            ))}

                        </List>
                    </Modal.Description>

                </Modal.Content>
            </Modal>
        )
    }
}



export default LoadModal;