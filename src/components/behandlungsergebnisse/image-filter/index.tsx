"use client"

import {Fragment, useEffect} from 'react'
import Image from "next/image";
import { Menu, Transition } from '@headlessui/react'
import {useState} from "react";
import ArrowUp from "@/icons/arrow-up";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = {
    "Abdomen": {
        "Frau": [
            [
                {
                    fileName: "Abdomen-front-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-front-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-front-after.webp",
                    week: 12,
                    processStep: "after",
                },
                {
                    fileName: "Abdomen-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
            [
                {
                    fileName: "Abdomen2-front-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen2-front-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen2-front-after.webp",
                    week: 12,
                    processStep: "after",
                },
                {
                    fileName: "Abdomen2-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen2-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen2-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
        ],
        "Mann": [
            [
                {
                    fileName: "Abdomen-front-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-front-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-front-after.webp",
                    week: 12,
                    processStep: "after",
                },
                {
                    fileName: "Abdomen-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
            [
                {
                    fileName: "Abdomen2-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen2-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen2-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
        ]
    },
    "Flanken": {
        "Frau": [
            [
                {
                    fileName: "Abdomen-front-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-front-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-front-after.webp",
                    week: 12,
                    processStep: "after",
                },
                {
                    fileName: "Abdomen-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
            [
                {
                    fileName: "Abdomen2-front-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen2-front-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen2-front-after.webp",
                    week: 12,
                    processStep: "after",
                },
                {
                    fileName: "Abdomen2-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen2-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen2-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
        ],
        "Mann": [
            [
                {
                    fileName: "Abdomen-front-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-front-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-front-after.webp",
                    week: 12,
                    processStep: "after",
                },
                {
                    fileName: "Abdomen-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
            [
                {
                    fileName: "Abdomen2-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Abdomen2-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Abdomen2-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
        ]
    },
    "Oberarm": {
        "Frau": [
            [
                {
                    fileName: "Oberarme-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Oberarme-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Oberarme-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ],
            [
                {
                    fileName: "Oberarme2-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Oberarme2-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Oberarme2-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ]
        ],
        "Mann": null
    },
    "Rucken": {
        "Frau": [
            [
                {
                    fileName: "Rücken-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Rücken-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Rücken-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ]
        ],
        "Mann": [
            [
                {
                    fileName: "Rücken-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "Rücken-side-during.webp",
                    week: 8,
                    processStep: "while",
                },
                {
                    fileName: "Rücken-side-after.webp",
                    week: 12,
                    processStep: "after",
                }
            ]
        ]
    },
    "Submentaler Bereich": {
        "Frau": [
            [
                {
                    fileName: "submentaler Bereich-side-before.webp",
                    week: 0,
                    processStep: "before",
                },
                {
                    fileName: "submentaler Bereich-side-during.webp",
                    week: 4,
                    processStep: "while",
                },
                {
                    fileName: "submentaler Bereich-side-after.webp",
                    week: 8,
                    processStep: "after",
                }
            ]
        ],
        "Mann": null
    }
}

export default function ImageFilter() {

    const [bodyPart, setBodyPart] = useState(['Abdomen', 'Flanken', 'Oberarm', 'Rucken', 'Submentaler Bereich']);
    const [gender, setGender] = useState(['Frau', 'Mann']);

    const [selectedItems, setSelectedItems] = useState({
        bodyPart: '',
        gender: ''
    })

    const [filteredData, setFilteredData] = useState([]);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {

        let currentData = [];

        // @ts-ignore
        currentData = data[selectedItems.bodyPart];
        if(!currentData) {
            setFilteredData([])
            return;
        }

        currentData = currentData[selectedItems.gender];
        if(!currentData) {
            setFilteredData([])
            return;
        }

        if(window.innerWidth <= 767) {
            const mergedArray = [].concat(...currentData);

            const result = [];
            for (let i = 0; i < mergedArray.length; i += 3) {
                result.push(mergedArray.slice(i, i + 3));
            }

            currentData = result;
            setIsMobile(true);
        }

        //console.log(currentData)
        setFilteredData(currentData);

    }, [selectedItems]);

    return (
        <section className="bg-[#005EB8] py-[80px] lg:py-[120px] px-[20px] xl:px-0 text-white">
            <div className="flex flex-col justify-center items-center">
                <h2 className="mb-[24px] text-[48px] lg:text-[64px] font-kanedaGothic font-medium">Vorher Nachher Bilder -
                    CoolSculpting<sup className="font-avenirNext">®</sup></h2>
                <div className="flex flex-row gap-5">
                    <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button
                            className="inline-flex justify-center items-center gap-x-1.5 rounded-md bg-white px-6 py-3 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedItems.bodyPart ? selectedItems.bodyPart === 'Rucken' ? 'Rücken' : selectedItems.bodyPart : 'Body Part'}
                            <ArrowUp width={15} height={15} fill="#005CB9"/>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute left-0 z-10 mt-2 w-[221px] origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {bodyPart.map((item, index) => (
                                        <Menu.Item key={index} as={Fragment}>
                                            {({active}) => (
                                                <span onClick={e => {
                                                    setSelectedItems({
                                                        ...selectedItems,
                                                        bodyPart: item
                                                    })
                                                }}
                                                      className={`block text-black px-4 py-2 text-sm cursor-pointer ${active && 'bg-gray-50'} ${selectedItems.bodyPart === item && 'bg-gray-50'}`}>{item === 'Rucken' ? 'Rücken' : item}</span>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    <Menu as="div"
                          className={`relative inline-block text-left ${!selectedItems.bodyPart && 'disabled-dropdown'}`}>
                        <Menu.Button
                            className="inline-flex justify-center items-center gap-x-1.5 rounded-md bg-white px-6 py-3 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            {selectedItems.gender ? selectedItems.gender : 'Gender'}
                            <ArrowUp width={15} height={15} fill="#005CB9"/>
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                className="absolute right-0 z-10 mt-2 w-[221px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {gender.map((item, index) => (
                                        <Menu.Item key={index} as={Fragment}>
                                            {({active}) => (
                                                <span onClick={e => {
                                                    setSelectedItems({
                                                        ...selectedItems,
                                                        gender: item
                                                    })
                                                }}
                                                      className={`block text-black px-4 py-2 text-sm cursor-pointer ${active ? 'bg-gray-50' : ''}`}>{item}</span>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                {
                    (selectedItems.bodyPart && selectedItems.gender && filteredData) && (
                        <div className="max-w-[1266px] w-full mx-auto">
                            <Swiper
                                modules={[Pagination]}
                                pagination={{ clickable: true }}
                                className="mt-[50px]"
                                spaceBetween={30}
                                slidesPerView={1}
                                observer={true}
                                observeSlideChildren={true}
                                autoHeight={true}
                            >
                                {
                                    filteredData.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className={`grid grid-cols-${isMobile ? 1 : 3} gap-[30px]`}>
                                                {
                                                    //@ts-ignore
                                                    item.map((img, imgIndex) => (
                                                        <div key={imgIndex}>
                                                            <Image src={`/images/image-filter/${selectedItems.bodyPart}/${selectedItems.gender}/${img.fileName}`} width={402} height={239} alt={"image"} />
                                                            <div className="text-center mt-[10px] md:mt-[40px]">
                                                                <b>
                                                                    {img.processStep == 'before' && 'Vorher'}
                                                                    {img.processStep == 'while' && 'Während'}
                                                                    {img.processStep == 'after' && 'Nachher'}
                                                                </b>
                                                                <p>
                                                                    {(img.processStep == 'while' || img.processStep == 'after') && img.week}
                                                                    {img.processStep == 'while' && ' Wochen nach der ersten Behandlung'}
                                                                    {img.processStep == 'after' && ' Wochen nach der zweiten Behandlung'}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }

                            </Swiper>


                            <div className="mt-[20px]">
                                <b>Disclaimer:</b>
                                <p>Ein bestimmter Behandlungserfolg kann nicht garantiert werden und hängt von den
                                    individuellen
                                    Rahmenbedingungen ab bzw. kann von diesen beeinflusst werden (körperliche
                                    Voraussetzungen,
                                    sportliche Betätigung, Ernährungsumstellung etc.). Vorher-Während-Nachher-Fotos mit
                                    freundlicher Genehmigung von Bodify und Steven Sorr, NMD</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    )
}
