import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phineas blog',
  description: 'Phineas dev - Personal blog - Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [
      {
        url: 'https://res.cloudinary.com/dvahwagyp/image/upload/v1708938368/5bcd466d-cf44-4074-bbd9-74b36feb1123.png',
      },
    ],
  },
};

export default function PageContact() {

  return (
    <div className="cover-home3">
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <div className="text-center mt-70">
              <h1 className="color-linear d-inline-block mb-30">
                Liên hệ
              </h1>
            </div>
            <div className="text-center mt-30">
              <div className="d-inline-block support text-start">
                0941404225
              </div>
              <div className="d-inline-block location text-start">DaNang</div>
              <div className="d-inline-block plane text-start">
                phianh.dev@gmail.com
              </div>
            </div>
            <div className="box-map mt-70 mb-50">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64947999849!2d108.13486054882645!3d16.047156783463713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2sDa%20Nang%2C%20H%E1%BA%A3i%20Ch%C3%A2u%20District%2C%20Da%20Nang%2C%20Vietnam!5e0!3m2!1sen!2s!4v1662806484564!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* <div className="form-contact">
              <div className="text-center">
                <h3 className="color-linear d-inline-block mb-10">
                  Drop Us a Line
                </h3>
                <p className="text-xs color-gray-500">
                  Your email address will not be published. Required fields are
                  marked *
                </p>
              </div>
              <div className="row mt-50">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control bg-gray-850 border-gray-800 color-gray-500"
                      type="text"
                      placeholder="Your name *"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control bg-gray-850 border-gray-800 color-gray-500"
                      type="text"
                      placeholder="Email *"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control bg-gray-850 border-gray-800 color-gray-500"
                      type="text"
                      placeholder="Phone number *"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input
                      className="form-control bg-gray-850 border-gray-800 color-gray-500"
                      type="text"
                      placeholder="Subject *"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea
                      className="form-control bg-gray-850 border-gray-800 color-gray-500"
                      rows={5}
                      placeholder="Message *"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="text-center mb-50">
                    <Link
                      href="#"
                      className="btn btn-linear btn-load-more btn-radius-8 hover-up">
                      Send Message
                      <i className="fi-rr-arrow-small-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
