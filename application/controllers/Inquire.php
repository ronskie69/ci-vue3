<?php


class Inquire extends CI_Controller {

    public function __construct()
    {
        parent::__construct();
        $this->load->model("user_model");
    }

    public function index() {

        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

        $username = $this->input->post('username');
        $password = $this->input->post('password');

        $password = hash('sha512', $password);

        $result = $this->user_model->login($username, $password);

        $data['data'] = $result;

        $this->session->set_userdata('session', $result);

        $this->load->view('inquire', $data);
        
    }
}