<?php

class Users extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model("user_model");
    }

    public function index() {
        $data['users'] = $this->user_model->getUsers();
        // $data['session'] = $this->session->user_data('session');

        $this->load->view('sample', $data);
    }
}