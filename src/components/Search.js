import React from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import User from './User'



const Search = ({ startSearch, handleChange, user }) => {

    return (
        <div  >
            <Form className="d-flex container my-3">
                <FormControl
                    style={{width: '20rem'}}
                    type="text"
                    placeholder="Search Github User"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleChange}
                   
                />
                <Button variant="outline-success " className='mx-3 btn btn-outline-success' onClick={() => { startSearch() }}>Search</Button>

            </Form>
               {user && <User user={user} /> }
        </div>
    )
}

export default Search
