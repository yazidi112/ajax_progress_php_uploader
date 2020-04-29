<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class UploadController extends AbstractController
{
    /**
     * @Route("/upload", name="upload")
     */
    public function index(Request $request)
    {
        
        $file     = $request->files->get('file');
        $filename = uniqid().".".$file->guessExtension();
        if($file->move('upload/',$filename)){
            return $this->json([
                        'url'       => 'upload/'.$filename,
                        'status'    =>'success',
                        'data'   =>'fichier téléchargé avec success']);   
                
        }else{
            return $this->son(['status'=>'error']);
        }
        
    }
}
