@extends('layouts.app')

@section('title', 'Login')

@section('content')
<div class="panel panel-default">
    <div class="panel-heading text-center"><h4>LOGIN</h4></div>
    <div class="panel-body">
        <div class="col-md-5 col-md-offset-4">
            <form action="/api/login" method="POST">
            {{ csrf_field() }}
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" name="password" placeholder="Password">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
@endsection
