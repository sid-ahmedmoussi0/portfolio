import React from 'react';
import { Typography } from "@material-tailwind/react";
import ScrollToTopButton from '../TopButton/TopButton';
import menuItems from '../../elements/FooterElements/FooterElements';
import contactItems from '../../elements/FooterElements/ContactElements';
import socialsItems from '../../elements/FooterElements/SocialElements';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-center text-white  lg:text-left">
            <ScrollToTopButton />
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            Sid-Ahmed Moussi
                        </h6>
                        <p>
                            Développeur Full Stack passionné par l'informatique et plus particulièrement par le développement d'applications et de sites web.  
                        </p>
                    </div>
                    {/* <!-- Lien Important --> */}
                    <div className="">
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Liens Importants
                        </h6>
                        {menuItems.map((element) => (
                            <p className="mb-4" key={element.id}>
                                <Typography
                                    as="a"
                                    href={element.href}
                                    color="blue-gray"
                                    className="text-white">
                                    {element.label}
                                </Typography>
                            </p>
                        ))}
                    </div>
                    {/* <!-- Contact --> */}
                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        {contactItems.map((element) => (
                            <p className="mb-4 flex items-center justify-center md:justify-start" key={element.id}>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                        dangerouslySetInnerHTML={{ __html: element.svg }}
                                    />
                                </span>
                                <Typography
                                    as="a"
                                    href={element.href}
                                    color="blue-gray"
                                    className="text-white">
                                    {element.label}
                                </Typography>
                            </p>
                        ))}
                    </div>
                    {/* <!-- Réseaux Sociaux --> */}
                    <div>
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Réseaux Sociaux
                        </h6>
                        {socialsItems.map((element) => (
                            <p className="mb-4 flex items-center justify-center md:justify-start" key={element.id}>
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="mr-3 h-5 w-5"
                                        dangerouslySetInnerHTML={{ __html: element.svg }}
                                    />
                                </span>
                                <Typography
                                    as="a"
                                    href={element.href}
                                    color="blue-gray"
                                    className="text-white">
                                    {element.label}
                                </Typography>
                            </p>
                        ))}
                    </div>
                </div>
            </div>


            <div className="bg-gray-800 p-6 text-center">
                <Typography
                    variant="small"
                    className="font-semibold text-white"
                >
                    &copy; {currentYear} Sid-Ahmed Moussi
                </Typography>
            </div>

        </footer>
    );
}

export default Footer;
