import React, { useState } from 'react'
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import './form.scss'
//     const [formData, setFormData] = useState({
//         section1: {
//             field1: '',
//             field2: '',
//         },
//         section2: {
//             field3: '',
//             field4: '',
//         },
//     });

//     const handleInputChange = (section, fieldName, value) => {
//         setFormData((prevData) => ({
//             ...prevData,
//             [section]: {
//                 ...prevData[section],
//                 [fieldName]: value,
//             },
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your form submission logic here
//         console.log('Form Data:', formData);
//     };

//     return (
//         <Form onSubmit={handleSubmit}>
//             <Accordion defaultActiveKey="0">
//                 <Card>
//                     <Card.Header>
//                         <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                             Section 1
//                         </Accordion.Toggle>
//                     </Card.Header>
//                     <Accordion.Collapse eventKey="0">
//                         <Card.Body>
//                             <Form.Group controlId="field1">
//                                 <Form.Label>Field 1</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={formData.section1.field1}
//                                     onChange={(e) => handleInputChange('section1', 'field1', e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="field2">
//                                 <Form.Label>Field 2</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={formData.section1.field2}
//                                     onChange={(e) => handleInputChange('section1', 'field2', e.target.value)}
//                                 />
//                             </Form.Group>
//                         </Card.Body>
//                     </Accordion.Collapse>
//                 </Card>

//                 <Card>
//                     <Card.Header>
//                         <Accordion.Toggle as={Button} variant="link" eventKey="1">
//                             Section 2
//                         </Accordion.Toggle>
//                     </Card.Header>
//                     <Accordion.Collapse eventKey="1">
//                         <Card.Body>
//                             <Form.Group controlId="field3">
//                                 <Form.Label>Field 3</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={formData.section2.field3}
//                                     onChange={(e) => handleInputChange('section2', 'field3', e.target.value)}
//                                 />
//                             </Form.Group>
//                             <Form.Group controlId="field4">
//                                 <Form.Label>Field 4</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     value={formData.section2.field4}
//                                     onChange={(e) => handleInputChange('section2', 'field4', e.target.value)}
//                                 />
//                             </Form.Group>
//                         </Card.Body>
//                     </Accordion.Collapse>
//                 </Card>
//             </Accordion>

//             <Button variant="primary" type="submit">
//                 Submit
//             </Button>
//         </Form>
//     )
// }

// export default Dynamic

function DynamicForm() {
    const [formData, setFormData] = useState({
        section1: {
            field1: '',
            field2: '',
        },
        section2: {
            field3: '',
            field4: '',
        },
    });

    const handleInputChange = (section, fieldName, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [fieldName]: value,
            },
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form Data:', formData);
    };

    return (
        <div className="form-container">


            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default DynamicForm