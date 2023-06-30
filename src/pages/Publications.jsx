import { Routedirection } from "../components/Routedirection";
import { Publicationcard } from "../components/Publicationcard";
import arrhythmiaClassification from "../../public/arrhythmia_classification.jpg"
import rgbVision from "../../public/rgb-d_vision.png"
import anthropomorphicRoboticHand from "../../public/anthropomorphicRoboticHand.jpg"
import anthropomorphicRoboticHandDatabase from "../../public/anthropomorphicRoboticHandDatabase.jpg"
import HWManipulationVideo from "../../public/HWManipulationVideo.mp4"
import anthropomorphicRoboticHandRealTimeTest from "../../public/anthropomorphicRoboticHandRealTimeTest.mp4"
import "./Publications.css"

export function Publications() {
    return (
        <>
            <div id="all-content">
                <h1 id="text">Publications</h1>
                <div id="primary-content">
                    <div id="separated-content">
                        <Routedirection mensaje="Publications" />
                        <Publicationcard investigation="A Deep Learning-Based Algorithm for ECG Arrhythmia Classification" 
                        summary="This investigation aims to automatically classify five classes of arrhythmia present in Electrocardiograms (ECG) by using two Deep Learning (DL)-based models. One is based on Convolutional Neural Network (CNN) and the other is based on Residual Networks (ResNet). The main motivation of this research is to enhance the field of medicine and assist doctors in the diagnosis of arrhythmia. The DL-based models were trained using the MIT Arrhythmia database. Results with the validation dataset shows that the CNN-based model achieved an accuracy of 99.32% and a F1-Score of 98.55%; the ResNet-based model achieved 99.32% and 98.55% for accuracy and F1-Score, respectively"
                        img={arrhythmiaClassification}/>

                        <Publicationcard investigation="Fully Autonomous Deep Learning RGB-D Vision-based Object Manipulation with an Anthropomorphic Robotic Hand" 
                        summary="Autonomous object manipulation with robotic hands is under active investigation because autonomous vision and motor control are required. Vision allows a robotic hand to interact with the environment by estimating the grasping parameters. Motor control generates the motion parameters to reach an object and manipulate the object. In this investigation, Deep Learning RGB-D vision is used to detect the object and generate the grasping parameters of position and orientation. An anthropomorphic robotic hand system composed of UR3 robotic arm and qb soft hand is used for motor functions of object grasping and relocation. Our autonomous object manipulation system achieves an average of 8.5/10 attempts of successful grasping and relocations."
                        img={rgbVision}
                        videoTitle="Manipulation:"
                        video={HWManipulationVideo}/>

                        <Publicationcard investigation="Supervised Machine Learning Applied to Non-Invasive EMG Signal Classification for an Anthropomorphic Robotic Hand" 
                        summary="In this investigation, we implement a non-invasive EMG-Based control system for a 3D-printed anthropomorphic robot hand based on Artificial Neural Network (ANN). A database of EMG signals from 4 gestures was created to train eight machine learning-based classifiers including ANN. Comparing the gesture recognition performance of all algorithms, the ANN obtained the highest accuracy of 84.78%. The implemented control system has a delay of two seconds after recognizing the hand gesture."
                        img={anthropomorphicRoboticHand}
                        img2Title="Database:"
                        img2={anthropomorphicRoboticHandDatabase}
                        videoTitle="Real Time Test:"
                        video={anthropomorphicRoboticHandRealTimeTest}/>
                    </div>
                </div>
            </div>
        </>
    )
}