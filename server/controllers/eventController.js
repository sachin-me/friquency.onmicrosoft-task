const Event = require('./../models/Event');
const User = require('./../models/User');

module.exports = {
    create: (req, res) => {
        const { eventname, eventhost, eventdate, eventplace } = req.body;
        const { id } = res.locals.userId;
        const newEvent = new Event({
            eventname,
            eventhost, 
            eventdate,
            eventplace
        })

        newEvent.save((err, event) => {
            if (err) {
                return res.status(500).json({
                    err: 'Internal server error'
                })
            } else {
                User.findOneAndUpdate({ _id: id }, {
                    $push: {
                        events: event._id
                    }
                }, { new: true }, (err, updatedUser) => {
                    console.log(updatedUser, 'in event ctrl');
                    if (err) {
                        return res.status(403).json({
                            err: 'Bad Request'
                        })
                    }
                    return res.status(200).json({
                        msg: 'Event created',
                        updatedUser
                    })
                })
            }
        })
    }
}