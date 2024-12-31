import { motion } from "framer-motion";

const OurImpact = () => {
  return (
    <section className="w-11/12 lg:w-9/12 mx-auto py-12 my-5">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Impact
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We're proud to be part of a community that helps those in need. Here’s
          a look at the difference we’re making together.
        </motion.p>

        {/* Impact Statistics with animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              1000+
            </h3>
            <p className="text-gray-700">Meals Donated</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">500+</h3>
            <p className="text-gray-700">Beneficiaries Served</p>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4">200+</h3>
            <p className="text-gray-700">Generous Donators</p>
          </motion.div>
        </div>

        {/* Call to Action Section with animation */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Join the Movement
          </h3>
          <p className="text-gray-700 mb-6">
            Every donation counts. Be part of our mission to feed those in need
            and make a positive impact in our community.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300"
          >
            Donate Now
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OurImpact;
