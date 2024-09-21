export function loginRequired(req, res, next) {
    if (!req.session.userId) {
        res.status(401).json({ error: 'Unauthorized' });
    } else {
        next();
    }
}