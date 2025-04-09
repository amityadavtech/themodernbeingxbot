import { useEffect } from "react";

export default function WorkflowSection() {
    useEffect(() => {
        const handleScroll = () => {
            const timeline = document.querySelector('.timeline');
            const progress = document.querySelector('.progress');

            if (timeline && progress) {
                const timelineRect = timeline.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const offsetStart = -300;
                const offsetEnd = 350;

                const start = window.scrollY + timelineRect.top - windowHeight / 2 + offsetStart;
                const end = window.scrollY + timelineRect.bottom - windowHeight / 2 - offsetEnd;

                let scrollProgress = (window.scrollY - start) / (end - start);
                scrollProgress = Math.max(0, Math.min(1, scrollProgress));

                progress.style.height = `${scrollProgress * 100}%`;
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("fade-in");
                    }
                });
            },
            {
                threshold: 0.3,
            }
        );

        const containers = document.querySelectorAll(".sec-container");
        containers.forEach((container) => observer.observe(container));

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            observer.disconnect();
        };
    }, []);

    const steps = [
        {
            title: "REQUIREMENTS ANALYSIS",
            img: "/images/analysis.svg",
            desc: "We conduct in-depth discussions to gather specific requirements, define project goals, and understand the target audience to ensure a clear development roadmap.",
        },
        {
            title: "PLANNING AND DESIGNING",
            img: "/images/designing.svg",
            desc: "We create a strategic plan, define the project timeline, and develop user-centric wireframes and design mockups focused on usability and aesthetics.",
        },
        {
            title: "TEMPLATE CREATION",
            img: "/images/creation.svg",
            desc: "Custom templates are crafted with a focus on responsive design, seamless navigation, and visual consistency across all devices and browsers.",
        },
        {
            title: "DEVELOPMENT",
            img: "/images/development.svg",
            desc: "We write optimized, maintainable code and implement essential features using the latest web technologies for high performance and scalability.",
        },
        {
            title: "DEPLOYMENT",
            img: "/images/deployment.svg",
            desc: "The website is deployed to a secure, high-availability hosting server with proper domain configuration, speed optimization, and SSL setup.",
        },
        {
            title: "DELIVERED",
            img: "/images/delivered.svg",
            desc: "Final product is delivered with complete quality assurance, performance testing, client review, and essential user training or documentation.",
        },
    ];

    return (
        <>
            <section className="work-process relative z-10 mx-auto w-full">
                <div className="text-center p-8 md:p-16 mb-4">
                    <h2 className="text-5xl font-bold text-[#ffffff] relative inline-block">
                        Work<span className="text-[#633BFF]">Flow</span>
                        <span className="absolute left-0 bottom-[-5px] w-full h-[4px] bg-[#633BFF] rounded-md"></span>
                    </h2>
                </div>

                <div className="timeline">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`timeline-step ${index % 2 === 0 ? "left-step" : "right-step"}`}
                        >
                            <div className="sec-container hidden-before-fade">
                                <div className="text-box">
                                    <img src={step.img} alt={step.title} />
                                    <h2>{step.title}</h2>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                            <div className={`step-number ${index % 2 !== 0 ? "right-number" : ""}`}>
                                {index + 1}
                            </div>
                        </div>
                    ))}

                    <div className="timeline-line">
                        <div className="progress"></div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .work-process {
                    background-color: #1A1A2E;
                }

                .timeline {
                    padding-bottom: 50px;
                    max-width: 100%;
                    overflow-x: hidden;
                    position: relative;
                }

                .timeline-step {
                    padding: 25px 205px;
                    width: 50%;
                    position: relative;
                }

                .left-step {
                    left: 0;
                }

                .right-step {
                    left: 50%;
                }

                .step-number {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #663bff;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 700;
                    font-size: 20px;
                    position: absolute;
                    top: 0;
                    right: -20px;
                    z-index: 4;
                }

                .right-number {
                    left: -20px;
                }

                .timeline-line {
                    height: 90%;
                    background: #3c3c3c;
                    position: absolute;
                    top: 0;
                    left: 50%;
                    margin-left: -3px;
                    width: 6px;
                    z-index: 2;
                }

                .progress {
                    background-color: #663bff;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 6px;
                    height: 0;
                    transition: height 0.25s ease-out;
                    z-index: 3;
                }

                .text-box {
                    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
                    overflow: hidden;
                    min-height: 450px;
                    text-align: center;
                    transition: transform .3s;
                    border-radius: 10px;
                    flex-direction: column;
                    max-width: 90%;
                    width: 90%;
                    margin: 0 auto;
                }

                .text-box h2 {
                    background-color: #663bff;
                    color: #fff;
                    font-weight: 700;
                    padding: 16px;
                    margin: 0;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }

                .text-box p {
                    padding: 20px 0;
                    font-size: 25px;
                    color: #eaeaea;
                    line-height: 1.5;
                    margin: 0;
                }

                /* Fade-in animation */
                .hidden-before-fade {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s ease, transform 0.8s ease;
                }

                .fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                /* RESPONSIVE STYLES */
                @media screen and (max-width: 1024px) {
                    .timeline-step {
                        padding: 25px;
                    }
                }

                @media screen and (max-width:768px) {
                    .text-section p {
                        font-size: 16px
                    }
                    .timeline-step {
                        padding: 0
                    }
                    .image-section {
                        max-width: 50%;
                        margin-top: 40px
                    }
                }

                @media screen and (max-width:600px) {
                    .text-box p,
                    .text-section p {
                        font-size: 16px
                    }
                    .timeline-step {
                        width: 100%
                    }
                    .step-number {
                        left: 0;
                        right: 0;
                        margin-left: 20px
                    }
                    .right-number,
                    .right-step {
                        left: 0
                    }
                    .timeline {
                        margin-bottom: 0
                    }
                    .timeline-line {
                        left: 0;
                        margin-left: 37px
                    }
                    .text-box {
                        max-width: 85%;
                        padding-left: 37px;
                        margin-bottom: 38px
                    }
                    .text-box h2 {
                        font-size: 19px
                    }
                }
            `}</style>
        </>
    );
}
