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
     'name', 'email', 'password', 'is_verified', 'company'
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

    public function doDeactive(){
        if($this->active === 1 && $this->is_verified){
            $this->active = 0;
            $this->save();
            return true;
        } else {
            return false;
        }
    }

    public function doUnverifyMember(){
        if($this->active === 0){
            $this->is_verified = 0;
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

     public function getRoleAdmin($query){
         return $query->where('role_name', 'Admin');
     }

     public function getRoleMember(){
         return $this->where('role_name', 'Member');
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
