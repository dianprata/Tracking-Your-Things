@extends('layouts.app')

@section('title', 'Register')

@section('content')
<div class="panel panel-default">
    <div class="panel-heading text-center"><h4>REGISTER</h4></div>
    <div class="panel-body">
        <div class="col-md-5 col-md-offset-4">
            <form action="/api/register" method="POST">
            {{ csrf_field() }}
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Name">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="company">Company</label>
                    <input type="text" class="form-control" id="company" name="company" placeholder="Company">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                </div>
                <div class="form-group">
                    <label for="passwordConf">Password Confirmation</label>
                    <input type="password" class="form-control" id="passwordConf" name="password_confirmation" placeholder="Password Confirmation">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
@endsection
