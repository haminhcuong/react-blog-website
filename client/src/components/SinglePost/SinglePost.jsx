import React from "react";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePost-wrapper">
        <img
          className="singlePost-img"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <h1 className="singlePost-title">
          Lorem ipsum dolor, sit amet.
          <div className="singlePost-edit">
            <i className="far fa-edit"></i>
            <i className="far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePost-infor">
          <span className="singePost-author">
            Author: <b>Safak</b>
          </span>
          <span className="singePost-date">
            Date: <b>1 hour ago</b>
          </span>
        </div>

        <div className="singlePost-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vero
            sed impedit, quasi eligendi similique nobis sit. Fugiat officia qui
            error explicabo consectetur cumque quis consequatur eius, corrupti
            minus voluptate? Vitae tempora, odit tempore aut molestiae sunt
            laborum obcaecati esse quaerat ea expedita rem ipsa? Quas quo
            blanditiis officia, adipisci nam impedit est quam voluptas ipsum
            ratione accusamus, enim nemo repellat eveniet ad praesentium commodi
            id mollitia maiores! Reiciendis, soluta ut architecto molestiae
            exercitationem corrupti eum nam quasi quam, optio aliquam iusto
            dolor, beatae blanditiis eaque laborum repellendus reprehenderit
            saepe harum in repudiandae? Fugit maiores nobis dolore accusantium
            impedit nam? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsum vero sed impedit, quasi eligendi similique nobis sit.
            Fugiat officia qui error explicabo consectetur cumque quis
            consequatur eius, corrupti minus voluptate? Vitae tempora, odit
            tempore aut molestiae sunt laborum obcaecati esse quaerat ea
            expedita rem ipsa? Quas quo blanditiis officia, adipisci nam impedit
            est quam voluptas ipsum ratione accusamus, enim nemo repellat
            eveniet ad praesentium commodi id mollitia maiores! Reiciendis,
            soluta ut architecto molestiae exercitationem corrupti eum nam quasi
            quam, optio aliquam iusto dolor, beatae blanditiis eaque laborum
            repellendus reprehenderit saepe harum in repudiandae? Fugit maiores
            nobis dolore accusantium impedit nam? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ipsum vero sed impedit, quasi eligendi
            similique nobis sit. Fugiat officia qui error explicabo consectetur
            cumque quis consequatur eius, corrupti minus voluptate? Vitae
            tempora, odit tempore aut molestiae sunt laborum obcaecati esse
            quaerat ea expedita rem ipsa? Quas quo blanditiis officia, adipisci
            nam impedit est quam voluptas ipsum ratione accusamus, enim nemo
            repellat eveniet ad praesentium commodi id mollitia maiores!
            Reiciendis, soluta ut architecto molestiae exercitationem corrupti
            eum nam quasi quam, optio aliquam iusto dolor, beatae blanditiis
            eaque laborum repellendus reprehenderit saepe harum in repudiandae?
            Fugit maiores nobis dolore accusantium impedit nam?
          </p>
        </div>
      </div>
    </div>
  );
}
