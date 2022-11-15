import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
const KeyCarousel = ({ slides }) => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "8px",
        color: "Gray",
        backgroundColor: "white",
        fontWeight: "bold",
        fontSize: "20px",
        transition: "0.6s ease",
        borderRadius: "1rem",
        userSelect: "none",
        // rounded: "50%",
        _hover: {
            opacity: 0.8,
            bg: "black",
            color: "white"
        },
    };


    const [currentSlide, setCurrentSlide] = useState(0);
    const slidesCount = slides.length - 2

    const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const carouselStyle = {
        transition: "all 1s",
        ml: `-${currentSlide * 33}%`,
    };
    return (
        <Flex
            w="full"
            bg="#edf3f8"
            _dark={{
                bg: "#3e3e3e",
            }}
            p={2}
            alignItems="center"
            justifyContent="center"
        >
            <Flex w="full" overflow="hidden" pos="relative">
                <Flex w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                        <Box key={`slide-${sid}`} w="33.5%"  shadow="md" flex="none">
                          <Flex direction="column" alignItems="center">
                          <Image
                                src={slide.img}
                                alt="carousel image"
                                height={["50px","60px","70px","80px"]}

                                backgroundSize="cover"
                                _hover={{
                                    transform: "scale(1.1)",
                                    transition: "1s",
                                    cursor: "pointer",
                                }}
                            />
                            <Text as = "b">{slide.name}</Text>
                          </Flex>
                             
                        </Box>
                    ))}
                </Flex>
                <Text {...arrowStyles} left="1" onClick={prevSlide}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} right="2" onClick={nextSlide}>
                    &#10095;
                </Text>
            </Flex>
        </Flex>
    );
};

export default KeyCarousel
//  <div key={e.img} style={{border:"5px solid red"}}>
//      <Image src={e.img} h="50px" w="50px" transition="transform 1s ease-in-out"
//      boxShadow= "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;    padding: 10px"
//      alt={e.img} />
//      <p >{e.name}</p>        
//    </div>)}    </Slider>
//    </div>
//   )
// }
