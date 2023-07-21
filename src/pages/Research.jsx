import { Routedirection } from "../components/Routedirection";
import { Publicationcard } from "../components/Publicationcard";
import arrhythmiaClassification from "../../public/arrhythmia_classification.jpg"
import rgbVision from "../../public/rgb-d_vision.png"
import anthropomorphicRoboticHand from "../../public/anthropomorphicRoboticHand.jpg"
import anthropomorphicRoboticHandDatabase from "../../public/anthropomorphicRoboticHandDatabase.jpg"
import transmissionShaft from "../../public/transmissionShaft.png"
import naturalObjectManipulation from "../../public/naturalObjectManipulation.jpg"
import autonomousObjectManipulation from "../../public/autonomousObjectManipulation.jpg"
import HWManipulationVideo from "../../public/HWManipulationVideo.mp4"
import anthropomorphicRoboticHandRealTimeTest from "../../public/anthropomorphicRoboticHandRealTimeTest.mp4"
import naturalObjectManipulationTest from "../../public/naturalObjectManipulationTest.mp4"
import { Center, Flex, Spacer } from '@chakra-ui/react'

export function Research() {
    return (
        <div id="all-content">
                <h1 id="text">Research</h1>
                <div id="primary-content">
                    <div id="separated-content">
                        <Routedirection mensaje="Research" />
                        <Flex wrap="wrap" justifyContent="center" gap={25}>
                            <Publicationcard investigation="Autonomous Assembly System of a Transmission Shaft using a Robotic Arm and Autonomous Learning Algorithms" 
                            orgPublished="Undergraduate degree program"
                            summary="The process of assembly via a robotic arm incorporates two key components: vision and control. The vision component is responsible for detecting the position and identifying the parts involved in the assembly, which include two gears and a shaft, for this part of the process will utilize the YOLO algorithm. Subsequently, the control component will be executed using Deep Reinforcement Learning (DRL). This will facilitate the generation of necessary movements for the grasping and relocation of the parts, thereby enabling the successful assembly of the shaft."
                            img={transmissionShaft}/>
                            
                            <Publicationcard investigation="Autonomous Object Manipulation using a UR5 Robotic arm and RGB-D camera via Deep Reinforcement Learning" 
                            orgPublished="Undergraduate degree program"
                            linkInvestigation=""
                            summary="Autonomous object manipulation is research that is active now due to the continuous improvement in industrial automatization, this research uses a UR5 robot arm to reposition different objects in a shelf using Deep reinforcement learning. In order to accomplish this is crucial to use robotic vision to identify different objects, which is possible by using YOLO, an algorithm that allows us to classify images and identify objects. Also using a reward function to train the robotic arm with the aim of learning to reposition objects."
                            img={autonomousObjectManipulation}/>

                            <Publicationcard investigation="A Deep Learning-Based Algorithm for ECG Arrhythmia Classification" 
                            orgPublished="The IEEE 13th International Conference on Pattern Recognition Systems (ICPRS)"
                            linkInvestigation="https://ieeexplore.ieee.org/document/10179058"
                            summary="This investigation aims to automatically classify five classes of arrhythmia present in Electrocardiograms (ECG) by using two Deep Learning (DL)-based models. One is based on Convolutional Neural Network (CNN) and the other is based on Residual Networks (ResNet). The main motivation of this research is to enhance the field of medicine and assist doctors in the diagnosis of arrhythmia. The DL-based models were trained using the MIT Arrhythmia database. Results with the validation dataset shows that the CNN-based model achieved an accuracy of 99.32% and a F1-Score of 98.55%; the ResNet-based model achieved 99.32% and 98.55% for accuracy and F1-Score, respectively"
                            img={arrhythmiaClassification}/>

                            <Publicationcard investigation="Fully Autonomous Deep Learning RGB-D Vision-based Object Manipulation with an Anthropomorphic Robotic Hand" 
                            orgPublished="Conference of the Korean Society for Communications and Communications"
                            linkInvestigation="https://journal-home.s3.ap-northeast-2.amazonaws.com/site/2021w/presentation/0072.pdf"
                            summary="Autonomous object manipulation with robotic hands is under active investigation because autonomous vision and motor control are required. Vision allows a robotic hand to interact with the environment by estimating the grasping parameters. Motor control generates the motion parameters to reach an object and manipulate the object. In this investigation, Deep Learning RGB-D vision is used to detect the object and generate the grasping parameters of position and orientation. An anthropomorphic robotic hand system composed of UR3 robotic arm and qb soft hand is used for motor functions of object grasping and relocation. Our autonomous object manipulation system achieves an average of 8.5/10 attempts of successful grasping and relocations."
                            img={rgbVision}
                            videoTitle="Manipulation:"
                            video={HWManipulationVideo}/>

                            <Publicationcard investigation="Supervised Machine Learning Applied to Non-Invasive EMG Signal Classification for an Anthropomorphic Robotic Hand" 
                            orgPublished="IEEE ANDESCON 2022"
                            linkInvestigation="https://ieeexplore.ieee.org/document/9989874"
                            summary="In this investigation, we implement a non-invasive EMG-Based control system for a 3D-printed anthropomorphic robot hand based on Artificial Neural Network (ANN). A database of EMG signals from 4 gestures was created to train eight machine learning-based classifiers including ANN. Comparing the gesture recognition performance of all algorithms, the ANN obtained the highest accuracy of 84.78%. The implemented control system has a delay of two seconds after recognizing the hand gesture."
                            img={anthropomorphicRoboticHand}
                            img2Title="Database:"
                            img2={anthropomorphicRoboticHandDatabase}
                            videoTitle="Real Time Test:"
                            video={anthropomorphicRoboticHandRealTimeTest}/>

                            <Publicationcard investigation="Natural Object Manipulation using Anthropomorphic Robotic Hand through Deep Reinforcement Learning" 
                            orgPublished="Applied Intelligence"
                            linkInvestigation="https://link.springer.com/article/10.1007/s10489-020-01870-6"
                            summary="Human hands can perform complex manipulation of various objects. It is beneficial if anthropomorphic robotic hands can manipulate objects like human hands. However, it is still a challenge due to the high dimensionality and lack of machine intelligence. We implement a novel framework based on Deep Reinforcement Learning (DRL) with Deep Grasping Probability Network (DGPN) to grasp and relocate variously shaped objects. The proposed DRL with DGPN is evaluated by grasping and relocating five objects including apple, light bulb, cup, bottle, and can. The results show that the standard DRL only achieves an average success rate of 22.60%, whereas DRL with DGPN achieves 89.40% for the grasping and relocation tasks of the objects."
                            img={naturalObjectManipulation}
                            videoTitle="Test:"
                            video={naturalObjectManipulationTest}/>
                            
                        </Flex>
                        
                    </div>
                </div>
            </div>
    )
}