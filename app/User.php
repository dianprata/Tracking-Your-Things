<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
     'name', 'email', 'password', 'is_verified'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function doActiveMember(){
        if($this->is_verified === 1){
            $this->active = 1;
            $this->save();
            return true;
        } else {
            return false;
        }
    }

    public function roles()
     {
         return $this->belongsToMany(Role::class);
     }

     public function putRole($role)
     {
         if (is_string($role))
         {
             $role = Role::whereRoleName($role)->first();
         }
         return $this->roles()->attach($role);
     }

     public function forgetRole($role)
     {
         if (is_string($role))
         {
             $role = Role::whereRoleName($role)->first();
         }
         return $this->roles()->detach($role);
     }

     public function hasRole($roleName)
     {
         foreach ($this->roles as $role)
         {
             if ($role->role_name === $roleName) return true;
         }
             return false;
     }
}
