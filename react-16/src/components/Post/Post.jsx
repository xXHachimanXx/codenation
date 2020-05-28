import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {

  const [follow, setFollow] = useState(false);
  const [like, setLike] = useState(false);

  const { comments } = postInfo;

  return (
    <article className="post" data-testid="post">
      {
        userInfo &&
        <header className="post__header">
          <Link to={`/users/${userInfo.username}`} className="user">
            <img className="user__thumb" src={userInfo.avatar} alt={userInfo.username} />
            <div className="user__name">{userInfo.name}</div>
          </Link>

          <button className="post__context" type="button" onClick={() => setFollow(!follow)}>
            {
              follow
                ? <span className="follow-btn is-following">Seguindo</span>
                : <span className="follow-btn">Seguir</span>
            }
          </button>
        </header>
      }

      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt="" />
      </figure>


      {userInfo &&
        <footer className="post__controls">
          <button className="post__control" type="button" onClick={() => setLike(!like)}>
            {like
              ? <i className="fas fa-heart" />
              : <i className="far fa-heart" />
            }
          </button>
          {userInfo && comments.length > 0 && (
            <div className="post__status">
              <div className="user">
                <span>curtido por <Link to="/">{comments[0].name}</Link> e outra{((comments.length - 1) + like) > 1 && 's'}
                  <Link to="/"> {(comments.length - 1) + like} pessoa{((comments.length - 1) + like) > 1 && 's'}.</Link>
                </span>
              </div>
            </div>
          )}
        </footer>
      }
    </article>
  );
};

export default Post;
