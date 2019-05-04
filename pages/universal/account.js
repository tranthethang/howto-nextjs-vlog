import React from 'react'
import posts from '../../data/posts'
import styles from "../../resource/css/universal/account.css";
import * as  _ from 'lodash'

export default ({ url: { query: { id } } }) => {
    const item = _.find(posts, { id: id })

    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <h3> NEXTHRONE - THE REVELATION OF GAME OF THRONES' CHARACTERS </h3>
            </div>
            <div className={styles.panel}>
                <h1 className={styles.heading}>
                    Character: {item.codeName}
                    <br />
                    <br />
                    Real Name: {item.realName}
                    <br />
                    <br />
                    Brief Description:
                    <br />
                    <br />
                    <span> {item.story} </span>
                </h1>
            </div>

            <div className={styles.singlePhoto}>
                <img src={item.display_src} alt={item.realName} width={500} height={500} />
            </div>
        </div>
    )
}