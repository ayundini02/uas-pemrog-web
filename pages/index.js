import React, { Component } from "react";
import Link from 'next/link';
import Head from "next/head";

export default class Login extends Component {
    render() {
        return (
            <div>
            <Head>
                <title>STIKOM PGRI BANYUWANGI</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="../css/bootstrap.css" rel="stylesheet" />
            </Head>
            <div class="text-center alert alert-primary">
            <u><h3 class="card-title">STIKOM PGRI BANYUWANGI</h3></u>
            </div>
            <div class="jumbotron jumbotron-fluid">
            <div class="container">
            <form>
                <u><h3>Login</h3></u>
                <br/>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <a href="/beranda" type="button" className="btn btn-primary btn-block">Submit</a>
               
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
}