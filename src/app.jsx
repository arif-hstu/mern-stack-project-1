{/*pg 50 */}
class IssueFilter extends React.Component {
    render() {
        return (
            <div>This is a placeholder for the issue filter.</div>
        );
    }
}

class IssueTable extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    <IssueRow issue_title='Title of the first issue'/> {/* somehow pass Issue 1 data to this*/}
                    <IssueRow /> {/* somehow pass Issue 2 data to this*/}
                </tbody>
            </table>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return (
            <div>This is a placeholder for a form to add an issue.</div>
        )
    }
}

class IssueList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Issue Tracker</h1>
                <IssueFilter />
                <hr/>
                <IssueTable />
                <hr/>
                <IssueAdd />
            </React.Fragment>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const style = this.props.rowStyle;
        return (
            <tr>
                <td style={style}>{this.props.issue_id}</td>
                <td style={style}>{this.props.issue_title}</td>
            </tr>
        );
    }
}
const element = <IssueList />;

ReactDOM.render(element, document.getElementById('content'));