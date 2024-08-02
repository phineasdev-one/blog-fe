'use client';

import Markdown from 'markdown-to-jsx';
import { FC } from 'react';

import Code from '@/components/elements/Code';
import { Tag } from '@/data/model/Tag/tag';
import { Link } from '@/utils/navigate';

type Props = {
  content: string;
  tags: Tag[];
};

const SingleContent: FC<Props> = ({ content, tags }) => {
  return (
    <>
      <div className="content-detail border-gray-800 them">
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
              },
            },
          }}>
          {content.replace(/\n/gi, '\n &nbsp;')}
        </Markdown>
      </div>

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
