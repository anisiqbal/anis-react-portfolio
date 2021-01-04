import React, {Component} from 'react';
import '../assets/css/admin.css';

class Admin extends React.Component {
    render(){
        return(
            <section>
                <div className="admin">
                    <div className="container">
                        <h1>Slider</h1>
                        <div className="row">

                           <div className="col-6 col-md-6 col-lg-6">
                                <input type="text" class="form-control" placeholder="Enter Your Description" />
                            </div>

                            <div className="col-6 col-md-6 col-lg-6">
                                <input type="text" class="form-control" placeholder="Enter Your Heading" />
                            </div>

                            <div className="col-4 col-md-4 col-lg-4 py-4">
                                <input type="text" class="form-control" placeholder="Enter Your Facebook ID" />
                            </div>

                            <div className="col-4 col-md-4 col-lg-4 py-4">
                                <input type="text" class="form-control" placeholder="Enter Your Twitter ID" />
                            </div>

                            <div className="col-4 col-md-4 col-lg-4 py-4">
                                <input type="text" class="form-control" placeholder="Enter Your Github ID" />
                            </div>

                            <div className="col-6 col-md-6 col-lg-6 pb-4">
                                <input type="text" class="form-control" placeholder="Enter Your Github ID" />
                            </div>
                        </div>

                        <div className="btns text-center">
                            <button type="button" class="btn btn-primary px-5 mr-3">Add</button>
                            <button type="button" class="btn btn-success px-5">Update</button>
                        </div>
                    </div>
                </div>
                            


            </section>
        )
    }
}

export default Admin;


