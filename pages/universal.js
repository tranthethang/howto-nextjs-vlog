import React from 'react'
import posts from '../data/posts'
import styles from "../resource/css/universal.css";
import Link from 'next/link'

export default class extends React.Component {
    static getInitialProps() {
        return { posts: posts }
    }

    render() {
        return (
            <div>
                <div className={styles.header}>
                    <h3 className={styles.h3}> NEXTHRONE - THE REVELATION OF GAME OF THRONES' CHARACTERS </h3>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th className={styles.th}>Character</th>
                            <th className={styles.th}>Real Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.posts.map((post, i) => (
                                <tr key={i}>
                                    <td className={styles.td}>{post.codeName}</td>
                                    <td className={styles.td}>
                                        <Link href={`/universal/account?id=${post.id}`}>
                                            <a title={post.realName}>{post.realName}</a>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
