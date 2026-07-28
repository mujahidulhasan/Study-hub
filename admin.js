// admin.js - Admin helper functions

import { auth, db, doc, getDoc } from './firebase-config.js';

/**
 * Check if a user is an admin
 * @param {string} userId - Firebase UID
 * @returns {Promise<boolean>}
 */
export async function isAdmin(userId) {
    if (!userId) return false;
    try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
            return userDoc.data().role === 'admin';
        }
        return false;
    } catch (e) {
        console.error('Error checking admin:', e);
        return false;
    }
}

/**
 * Middleware: Require admin authentication
 * Redirects to login or home if not admin
 * @returns {Promise<boolean>}
 */
export async function requireAdmin() {
    const user = auth.currentUser;
    if (!user) {
        window.location.href = '/login.html';
        return false;
    }
    const admin = await isAdmin(user.uid);
    if (!admin) {
        window.location.href = '/index.html';
        return false;
    }
    return true;
}

/**
 * Get all users (admin only)
 */
export async function getAllUsers() {
    const { collection, getDocs } = await import('./firebase-config.js');
    const snap = await getDocs(collection(db, 'users'));
    const users = [];
    snap.forEach(doc => {
        users.push({ id: doc.id, ...doc.data() });
    });
    return users;
}

/**
 * Delete a user (admin only)
 */
export async function deleteUser(userId) {
    const { doc, deleteDoc } = await import('./firebase-config.js');
    await deleteDoc(doc(db, 'users', userId));
    // Also delete their sessions, todos, etc.
    // Implement cascading delete
}

/**
 * Promote user to admin
 */
export async function promoteToAdmin(userId) {
    const { doc, updateDoc } = await import('./firebase-config.js');
    await updateDoc(doc(db, 'users', userId), { role: 'admin' });
}

/**
 * Demote admin to user
 */
export async function demoteToUser(userId) {
    const { doc, updateDoc } = await import('./firebase-config.js');
    await updateDoc(doc(db, 'users', userId), { role: 'user' });
}
