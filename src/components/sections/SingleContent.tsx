'use client';

import Markdown from 'markdown-to-jsx';
import { FC } from 'react';
import root from 'react-shadow';

import Code from '@/components/elements/Code';
import { Tag } from '@/data/model/Tag/tag';
import { Link } from '@/utils/navigate';

type Props = {
  content: string;
  tags: Tag[];
};

const SingleContent: FC<Props> = ({ content, tags }) => {
  const shadowStyles = `
  
.content-detail {
  >*+* {}

  color: #0d0d0d;
  outline: none;
  margin: 0 1rem;

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.6;
  }

  a {
    color: #0ea5ea;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #2f2f2f;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    display: block;
    width: 85%;
    height: 85%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}

.main-content {
  background: #f9fbff;
  padding-top: 20px;
  border-radius: 20px;
}

.copy-button {
  position: relative;
}

.copy-icon {
  position: absolute;
  right: 0;
  width: 30px;
  height: 30px;
  z-index: 10;
  border-radius: 8px;
  border: none;
  margin: 5px;
}

tr {
  border-top: 1px solid #c6cbd1;
}

th,
td {
  padding: 6px 13px;
  border: 1px solid #8a9299;
}

table tr:nth-child(2n) {
  background: #f6f8fa;
}

.table {
  width: 100% !important;
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

table {
  min-width: 50%;
}
  `;

  return (
    <>
      <root.div>
        <style>{shadowStyles}</style>
        <div className="content-detail border-gray-800 them">
          <Markdown
            options={{
              overrides: {
                code: {
                  component: Code,
                },
              },
            }}>
            {content}
          </Markdown>
        </div>
      </root.div>

      <div className="box-tags">
        {tags.map((tag, index) => (
          <Link
            key={index}
            className="btn btn-tags bg-gray-850 border-gray-800 mr-10 hover-up"
            href={{
              pathname: '/tag/[...slug]',
              params: { slug: [tag.label] },
            }}>
            #{tag.label}
          </Link>
        ))}
      </div>
      {/* <div className="box-comments border-gray-800">
        <h3 className="text-heading-2 color-gray-300">Comments</h3>
        <div className="list-comments-single">
          <div className="item-comment">
            <div className="comment-left">
              <div className="box-author mb-20">
                <img src="assets/imgs/page/single/author.png" alt="Phineas" />
                <div className="author-info">
                  <h6 className="color-gray-700">Robert Fox</h6>
                  <span className="color-gray-700 text-sm mr-30">
                    August 25, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="comment-right">
              <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">
                White white dreamy drama tically place everything although.
                Place out apartment afternoon whimsical kinder, little romantic
                joy we flowers handmade.
              </div>
            </div>
          </div>
          <div className="item-comment">
            <div className="comment-left">
              <div className="box-author mb-20">
                <img src="assets/imgs/page/single/author2.png" alt="Phineas" />
                <div className="author-info">
                  <h6 className="color-gray-700">Jenny Wilson</h6>
                  <span className="color-gray-700 text-sm mr-30">
                    August 25, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="comment-right">
              <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">
                White white dreamy drama tically place everything although.
                Place out apartment afternoon whimsical kinder, little romantic
                joy we flowers handmade.
              </div>
            </div>
          </div>
          <div className="item-comment item-comment-sub">
            <div className="comment-left">
              <div className="box-author mb-20">
                <img src="assets/imgs/page/single/author3.png" alt="Phineas" />
                <div className="author-info">
                  <h6 className="color-gray-700">Eleanor Pena</h6>
                  <span className="color-gray-700 text-sm mr-30">
                    August 25, 2023
                  </span>
                </div>
              </div>
            </div>
            <div className="comment-right">
              <div className="text-comment text-xl color-gray-500 bg-gray-850 border-gray-800">
                White white dreamy drama tically place everything although.
                Place out apartment afternoon whimsical kinder, little romantic
                joy we flowers handmade.
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="box-form-comments mb-50">
        <h4 className="text-heading-4 color-gray-300 mb-40">Leave a comment</h4>
        <div className="box-forms">
          <form action="#">
            <textarea
              className="form-control bg-gray-850 border-gray-800 bdrd16 color-gray-500"
              name="comment"
              rows={5}
              placeholder="Write a comment"
              defaultValue={''}
            />
            <div className="row mt-20">
              <div className="col-sm-6 mb-20">
                <input className="cb-agree" type="checkbox" />
                <p className="text-sm color-gray-500 pl-25">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
              <div className="col-sm-6 text-end">
                <Link className="btn btn-linear" href="#">
                  Post Comment
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div> */}
    </>
  );
};
export default SingleContent;
