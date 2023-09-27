<?php

class User_model extends CI_Model {
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    public function getUsers() {
        $this->db->select("username, department")
                 ->from("users")
                 ->order_by("username ASC");
        
        $query = $this->db->get();

        return $query->result();
    }

    public function login($username, $password){


        $this->db->where('username', $username);
        $this->db->where('password', $password);

        $result = $this->db->get('users');

        if($result->num_rows() > 0) {
            return $result->row(0);
        } else {
            return false;
        }
    }
}