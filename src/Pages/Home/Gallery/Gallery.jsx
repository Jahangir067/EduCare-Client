
const Gallery = () => {

    return (
        <div className="mt-8">
            <h3 className="text-3xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-900 to-violet-500 font-bold">Photo Gallery</h3>
            <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
                <div className="-m-1 flex flex-wrap md:-m-2">
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/XDbKvx6/portrait-three-smiling-graduate-friends-graduation-robes-university-campus-with-diploma.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/tB3TfQC/graduation-concept-with-students-holding-blank-certificate-template.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/r4vLBsV/portrait-group-students-celebrating-their-graduation.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/7gmLkDK/portrait-group-students-celebrating-their-graduation-1.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/jGwQWTb/multinational-graduates-male-female-celebrating-graduation-university-campus-removing-their-graduati.jpg" />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-wrap">
                        <div className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center"
                                src="https://i.ibb.co/nrFBcPj/three-happy-international-graduate-friends-greeting-university-campus-graduation-robes-with-diploma.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;