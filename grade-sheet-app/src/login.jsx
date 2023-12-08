import { useState } from 'react';

function LogIn() {
    
    return(
        <>
            <div class="page-container">
                <div class="body-container">
                    <div class="content-container">             
                        <div class="form-container">
                            <form id="form-login" class="form" action="" method="Post">
                                <h1>Login</h1> <br/>

                                <input type="text" name="username" id="username" placeholder="Student Email" class="form-input"/>
                                <br/><br/>
                                <input type="password" name="password" id="password" placeholder="Password" class="form-input"/>
                                <br/><br/>
                                
                                <div class="form-button">
                                    <input type="submit" name="submit" Click=""/><br/>
                                </div>
                            </form>
                        </div>
                        <div class="form-container">
                            <p>Don't have an account? Register <a href="" url="">here</a></p>
                        </div>
                    </div>
                </div>
            </div> 
        </>
        
    );
}

function verifyCredentials() {}

export default LogIn
    