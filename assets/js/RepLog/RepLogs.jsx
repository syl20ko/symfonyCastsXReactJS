import React from "react";
import RepLogList from "./RepLogList";
import PropTypes from "prop-types";
import RepLogCreator from "./RepLogCreator";

function calculateTotalWeightLifted(repLogs) {
  let total = 0;

  for (let repLog of repLogs) {
    total += repLog.totalWeightLifted;
  }

  return total;
}

const RepLogs = ({
  withHeart,
  highlightedRowId,
  onRowClick,
  repLogs,
  onAddRepLog,
  numberOfHearts,
  onHeartChange,
}) => {
  let heart = "";
  if (withHeart) {
    heart = <h1>{"ok".repeat(numberOfHearts)}</h1>;
  }
  return (
    <div className="col-md-7">
      <h2>Lift Stuff! {heart}</h2>
      <input
        type="range"
        value={numberOfHearts}
        onChange={(e) => {
          onHeartChange(+e.target.value);
        }}
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>What</th>
            <th>How many times?</th>
            <th>Weight</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <RepLogList
          highlightedRowId={highlightedRowId}
          onRowClick={onRowClick}
          repLogs={repLogs}
        />
        <tfoot>
          <tr>
            <td>&nbsp;</td>
            <th>Total</th>
            <th>{calculateTotalWeightLifted(repLogs)}</th>
            <td>&nbsp;</td>
          </tr>
        </tfoot>
      </table>
      <div className="row">
        <div className="col-md-6">
          <RepLogCreator onAddRepLog={onAddRepLog} />
        </div>
      </div>
    </div>
  );
};

RepLogs.propTypes = {
  withHeart: PropTypes.bool,
  highlightedRowId: PropTypes.any,
  onRowClick: PropTypes.func.isRequired,
  onAddRepLog: PropTypes.func.isRequired,
  repLogs: PropTypes.array.isRequired,
  numberOfHearts: PropTypes.number.isRequired,
  onHeartChange: PropTypes.func.isRequired,
};

export default RepLogs;
